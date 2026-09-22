"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import ConfirmModal from "@/Components/Admin/ConfirmModal/ConfirmModal";

import "./chats.css";

export default function ChatsPage() {
  // ==========================================
  // STATE
  // ==========================================

  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [detailLoading, setDetailLoading] =
    useState(false);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [pages, setPages] =
    useState(1);

  const [search, setSearch] =
    useState("");

  const [deleteModal, setDeleteModal] =
    useState({
      open: false,
      chat: null,
    });

  // ==========================================
  // ADMIN ROLE
  // ==========================================

  /*
   * Backend already protects DELETE.
   *
   * Filhaal delete button visible hai.
   */

  const canDelete = true;

  // ==========================================
  // FETCH ALL CHATS
  // ==========================================

  const fetchChats = async () => {
    try {
      setLoading(true);
      setError("");

      const token =
        Cookies.get("admin_token");

      if (!token) {
        throw new Error(
          "Admin authentication token not found."
        );
      }

      const params =
        new URLSearchParams({
          page: page.toString(),
          limit: "10",
        });

      if (search.trim()) {
        params.append(
          "conversationId",
          search.trim()
        );
      }

      const response =
        await fetch(
          `/api/chats?${params.toString()}`,
          {
            method: "GET",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },

            cache: "no-store",
          }
        );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            data.error ||
            "Failed to fetch chats."
        );
      }

      setChats(
        data.data?.chats || []
      );

      setPages(
        data.data?.pages || 1
      );
    } catch (err) {
      console.error(
        "Fetch Chats Error:",
        err
      );

      setError(
        err?.message ||
          "Something went wrong while loading chats."
      );

      setChats([]);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // FETCH SINGLE CHAT
  // ==========================================

  const fetchChatDetails =
    async (chatId) => {
      try {
        setDetailLoading(true);
        setError("");

        const token =
          Cookies.get(
            "admin_token"
          );

        if (!token) {
          throw new Error(
            "Admin authentication token not found."
          );
        }

        const response =
          await fetch(
            `/api/chats/${chatId}`,
            {
              method: "GET",

              headers: {
                Authorization:
                  `Bearer ${token}`,
              },

              cache: "no-store",
            }
          );

        const data =
          await response.json();

        if (
          !response.ok ||
          !data.success
        ) {
          throw new Error(
            data.message ||
              data.error ||
              "Failed to fetch conversation."
          );
        }

        setSelectedChat(
          data.data
        );
      } catch (err) {
        console.error(
          "Fetch Chat Details Error:",
          err
        );

        setError(
          err?.message ||
            "Something went wrong while loading conversation."
        );
      } finally {
        setDetailLoading(false);
      }
    };

  // ==========================================
  // DELETE CHAT
  // ==========================================

  const handleDeleteChat =
    async () => {
      if (
        !deleteModal.chat?._id
      ) {
        return;
      }

      try {
        setDeleteLoading(true);
        setError("");

        const token =
          Cookies.get(
            "admin_token"
          );

        if (!token) {
          throw new Error(
            "Admin authentication token not found."
          );
        }

        const response =
          await fetch(
            `/api/chats/${deleteModal.chat._id}`,
            {
              method: "DELETE",

              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        // ======================================
        // SAFELY READ RESPONSE
        // ======================================

        const responseText =
          await response.text();

        let data = {};

        if (responseText) {
          try {
            data =
              JSON.parse(
                responseText
              );
          } catch (parseError) {
            console.error(
              "Delete response JSON parse error:",
              parseError
            );

            throw new Error(
              "Server returned an invalid response."
            );
          }
        }

        // ======================================
        // API ERROR
        // ======================================

        if (!response.ok) {
          console.error(
            "DELETE API FAILED:",
            {
              status:
                response.status,

              statusText:
                response.statusText,

              data,
            }
          );

          throw new Error(
            data?.message ||
              data?.error ||
              `Failed to delete chat. Status: ${response.status}`
          );
        }

        // ======================================
        // SUCCESS
        // ======================================

        setDeleteModal({
          open: false,
          chat: null,
        });

        setSelectedChat(null);

        await fetchChats();
      } catch (err) {
        console.error(
          "Delete Chat Error:",
          err
        );

        setError(
          err?.message ||
            "Something went wrong while deleting chat."
        );
      } finally {
        setDeleteLoading(false);
      }
    };

  // ==========================================
  // OPEN DELETE MODAL
  // ==========================================

  const openDeleteModal =
    (chat) => {
      if (!canDelete) {
        return;
      }

      setDeleteModal({
        open: true,
        chat,
      });
    };

  // ==========================================
  // CLOSE DELETE MODAL
  // ==========================================

  const closeDeleteModal =
    () => {
      if (deleteLoading) {
        return;
      }

      setDeleteModal({
        open: false,
        chat: null,
      });
    };

  // ==========================================
  // INITIAL / PAGE FETCH
  // ==========================================

  useEffect(() => {
    fetchChats();
  }, [page]);

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearch =
    (event) => {
      event.preventDefault();

      setPage(1);

      /*
       * Agar already page 1 par hain,
       * useEffect trigger nahi hoga.
       * Isliye manually fetch karenge.
       */

      if (page === 1) {
        fetchChats();
      }
    };

  // ==========================================
  // CLEAR SEARCH
  // ==========================================

  const handleClearSearch =
    () => {
      setSearch("");
      setPage(1);

      setTimeout(() => {
        fetchChats();
      }, 0);
    };

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate =
    (date) => {
      if (!date) {
        return "-";
      }

      const parsedDate =
        new Date(date);

      if (
        Number.isNaN(
          parsedDate.getTime()
        )
      ) {
        return "-";
      }

      return parsedDate.toLocaleString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }
      );
    };

  // ==========================================
  // LAST MESSAGE
  // ==========================================

  const getLastMessage =
    (chat) => {
      if (
        !chat?.messages ||
        chat.messages.length === 0
      ) {
        return "No messages";
      }

      const lastMessage =
        chat.messages[
          chat.messages.length - 1
        ];

      return (
        lastMessage?.content ||
        "No message"
      );
    };

  // ==========================================
  // LOCATION TEXT
  // ==========================================

  const getLocationText =
    (location) => {
      if (!location) {
        return "Unknown";
      }

      const parts = [
        location.city,
        location.region,
        location.country,
      ].filter(Boolean);

      return (
        parts.join(", ") ||
        "Unknown"
      );
    };

  // ==========================================
  // PAGE COUNT
  // ==========================================

  const pageVisitCount =
    selectedChat?.pageVisits
      ?.length || 0;

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="admin-page chats-page">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="admin-page-header">

        <div>

          <h1>
            <FontAwesomeIcon
              icon={faComments}
            />

            Chats
          </h1>

          <p>
            View conversations between
            visitors and the AI assistant.
          </p>

        </div>

      </div>


      {/* ======================================
          SEARCH
      ====================================== */}

      <div className="admin-card">

        <form
          onSubmit={
            handleSearch
          }
          className="admin-toolbar chats-search-toolbar"
        >

          <div className="admin-search chats-search">

            <input
              type="text"
              placeholder="Search conversation ID..."
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
            />

          </div>

          <button
            type="submit"
            className="admin-btn admin-btn-primary"
          >
            Search
          </button>

          {search && (
            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={
                handleClearSearch
              }
            >
              Clear
            </button>
          )}

        </form>

      </div>


      {/* ======================================
          ERROR
      ====================================== */}

      {error && (
        <div className="admin-card">

          <div className="admin-alert admin-alert-error">
            {error}
          </div>

        </div>
      )}


      {/* ======================================
          MAIN CHAT LAYOUT
      ====================================== */}

      <div className="admin-chat-layout">

        {/* ====================================
            CHAT LIST
        ==================================== */}

        <div className="admin-card chats-list-card">

          <div className="chats-list-header">

            <h3>
              Conversations
            </h3>

            <span className="admin-badge admin-badge-info">
              {chats.length}
            </span>

          </div>


          {/* Loading */}

          {loading ? (

            <div className="admin-loading admin-p-40">

              <div className="admin-loading-spinner"></div>

            </div>

          ) : chats.length === 0 ? (

            /* Empty */

            <div className="admin-empty">

              <h3>
                No conversations found
              </h3>

              <p>
                Visitor conversations
                will appear here.
              </p>

            </div>

          ) : (

            /* Chat List */

            <div className="chats-list">

              {chats.map(
                (chat) => {

                  const isSelected =
                    selectedChat?._id ===
                    chat._id;

                  return (
                    <div
                      key={chat._id}
                      className={`chat-list-item ${
                        isSelected
                          ? "active"
                          : ""
                      }`}
                    >

                      {/* Clickable Chat Area */}

                      <button
                        type="button"
                        className="chat-list-content"
                        onClick={() =>
                          fetchChatDetails(
                            chat._id
                          )
                        }
                      >

                        {/* Top Row */}

                        <div className="chat-list-top">

                          <strong>
                            Visitor
                          </strong>

                          <small>
                            {formatDate(
                              chat.lastMessageAt
                            )}
                          </small>

                        </div>


                        {/* Conversation ID */}

                        <div className="chat-conversation-id">
                          {chat.conversationId}
                        </div>


                        {/* Last Message */}

                        <div className="chat-last-message">
                          {getLastMessage(
                            chat
                          )}
                        </div>


                        {/* Message Count */}

                        <div className="chat-message-count">
                          {chat.messageCount ||
                            0}{" "}
                          messages
                        </div>

                      </button>


                      {/* Delete */}

                      {canDelete && (
                        <button
                          type="button"
                          className="chat-delete-btn"
                          title="Delete conversation"
                          onClick={() =>
                            openDeleteModal(
                              chat
                            )
                          }
                        >

                          <FontAwesomeIcon
                            icon={
                              faTrash
                            }
                          />

                        </button>
                      )}

                    </div>
                  );
                }
              )}

            </div>
          )}


          {/* ==================================
              PAGINATION
          ================================== */}

          {pages > 1 && (
            <div className="admin-pagination chats-pagination">

              <button
                type="button"
                onClick={() =>
                  setPage(
                    (prev) =>
                      Math.max(
                        1,
                        prev - 1
                      )
                  )
                }
                disabled={page <= 1}
              >
                Previous
              </button>

              <span>
                Page {page} of {pages}
              </span>

              <button
                type="button"
                onClick={() =>
                  setPage(
                    (prev) =>
                      Math.min(
                        pages,
                        prev + 1
                      )
                  )
                }
                disabled={
                  page >= pages
                }
              >
                Next
              </button>

            </div>
          )}

        </div>


        {/* ====================================
            CONVERSATION DETAIL
        ==================================== */}

        <div className="admin-card chats-detail-card">

          <div className="conversation-header">

            <h3>
              Conversation
            </h3>

            {selectedChat &&
              canDelete && (
                <button
                  type="button"
                  className="chat-detail-delete-btn"
                  onClick={() =>
                    openDeleteModal(
                      selectedChat
                    )
                  }
                >

                  <FontAwesomeIcon
                    icon={faTrash}
                  />

                  Delete

                </button>
              )}

          </div>


          {/* No selected chat */}

          {!selectedChat ? (

            <div className="admin-empty">

              <h3>
                Select a conversation
              </h3>

              <p>
                Select a conversation
                from the left to view
                messages.
              </p>

            </div>

          ) : detailLoading ? (

            /* Detail Loading */

            <div className="admin-loading admin-p-40">

              <div className="admin-loading-spinner"></div>

            </div>

          ) : (

            <>

              {/* ==================================
                  CONVERSATION INFO
              ================================== */}

              <div className="conversation-info">

                <div>
                  <strong>
                    Conversation ID:
                  </strong>{" "}

                  <span>
                    {
                      selectedChat.conversationId
                    }
                  </span>
                </div>


                <div>
                  <strong>
                    Visitor ID:
                  </strong>{" "}

                  <span>
                    {
                      selectedChat.visitorId
                    }
                  </span>
                </div>


                <div>
                  <strong>
                    Messages:
                  </strong>{" "}

                  {selectedChat.messageCount ||
                    0}
                </div>


                <div>
                  <strong>
                    Started:
                  </strong>{" "}

                  {formatDate(
                    selectedChat.startedAt
                  )}
                </div>


                <div>
                  <strong>
                    Last Message:
                  </strong>{" "}

                  {formatDate(
                    selectedChat.lastMessageAt
                  )}
                </div>


                {/* Last Activity */}

                {selectedChat.lastActivityAt && (
                  <div>
                    <strong>
                      Last Activity:
                    </strong>{" "}

                    {formatDate(
                      selectedChat.lastActivityAt
                    )}
                  </div>
                )}

              </div>


              {/* ==================================
                  VISITOR LOCATION
              ================================== */}

              <div className="visitor-tracking-card">

                <div className="visitor-tracking-card-header">

                  <div>
                    <h3>
                      Visitor Location
                    </h3>

                    <p>
                      Approximate location
                      based on visitor IP.
                    </p>
                  </div>

                </div>


                {selectedChat.location ? (

                  <div className="visitor-location-grid">

                    <div className="visitor-location-item">

                      <span className="visitor-location-label">
                        Country
                      </span>

                      <span className="visitor-location-value">
                        {selectedChat.location.country ||
                          "Unknown"}
                      </span>

                    </div>


                    <div className="visitor-location-item">

                      <span className="visitor-location-label">
                        Region
                      </span>

                      <span className="visitor-location-value">
                        {selectedChat.location.region ||
                          "Unknown"}
                      </span>

                    </div>


                    <div className="visitor-location-item">

                      <span className="visitor-location-label">
                        City
                      </span>

                      <span className="visitor-location-value">
                        {selectedChat.location.city ||
                          "Unknown"}
                      </span>

                    </div>


                    <div className="visitor-location-item">

                      <span className="visitor-location-label">
                        Timezone
                      </span>

                      <span className="visitor-location-value">
                        {selectedChat.location.timezone ||
                          "Unknown"}
                      </span>

                    </div>

                  </div>

                ) : (

                  <div className="visitor-tracking-empty">
                    Location information is not
                    available.
                  </div>

                )}

              </div>


              {/* ==================================
                  USER NAVIGATION
              ================================== */}

              <div className="visitor-tracking-card">

                <div className="visitor-tracking-card-header">

                  <div>

                    <h3>
                      User Navigated To
                    </h3>

                    <p>
                      Pages visited after the
                      conversation started.
                    </p>

                  </div>


                  {pageVisitCount > 0 && (
                    <span className="page-visit-count">

                      {pageVisitCount}{" "}

                      {pageVisitCount === 1
                        ? "page"
                        : "pages"}

                    </span>
                  )}

                </div>


                {pageVisitCount > 0 ? (

                  <div className="page-journey">

                    {selectedChat.pageVisits.map(
                      (
                        visit,
                        index
                      ) => (

                        <div
                          key={
                            visit._id ||
                            `${visit.path}-${index}`
                          }
                          className="page-journey-item"
                        >

                          {/* Timeline Number */}

                          <div className="page-journey-number">
                            {index + 1}
                          </div>


                          {/* Page Content */}

                          <div className="page-journey-content">

                            <div className="page-journey-top">

                              <div className="page-journey-page">

                                {visit.title ||
                                  visit.path ||
                                  "Unknown page"}

                              </div>


                              <div className="page-journey-time">

                                {formatDate(
                                  visit.visitedAt
                                )}

                              </div>

                            </div>


                            <div className="page-journey-path">

                              {visit.path}

                            </div>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                ) : (

                  <div className="visitor-tracking-empty">

                    No page navigation
                    recorded yet.

                  </div>

                )}

              </div>


              {/* ==================================
                  MESSAGES
              ================================== */}

              <div className="conversation-messages">

                {!selectedChat.messages ||
                selectedChat.messages.length ===
                  0 ? (

                  <div className="admin-empty">

                    <h3>
                      No messages
                    </h3>

                    <p>
                      No messages in this
                      conversation.
                    </p>

                  </div>

                ) : (

                  selectedChat.messages.map(
                    (
                      message,
                      index
                    ) => {

                      const isUser =
                        message.role ===
                        "user";

                      return (
                        <div
                          key={
                            message._id ||
                            index
                          }
                          className={`message-row ${
                            isUser
                              ? "user-message"
                              : "assistant-message"
                          }`}
                        >

                          <div className="message-bubble">

                            {/* Role */}

                            <div className="message-role">

                              {isUser
                                ? "Visitor"
                                : "AI Assistant"}

                            </div>


                            {/* Message */}

                            <div className="message-content">

                              {
                                message.content
                              }

                            </div>


                            {/* Time */}

                            <div className="message-time">

                              {formatDate(
                                message.createdAt
                              )}

                            </div>

                          </div>

                        </div>
                      );
                    }
                  )

                )}

              </div>

            </>
          )}

        </div>

      </div>


      {/* ======================================
          DELETE CONFIRMATION MODAL
      ====================================== */}

      <ConfirmModal
        isOpen={
          deleteModal.open
        }

        onClose={
          closeDeleteModal
        }

        onConfirm={
          handleDeleteChat
        }

        title="Delete Conversation"

        message={
          deleteModal.chat
            ? "Are you sure you want to delete this conversation?"
            : "Are you sure you want to delete this conversation?"
        }

        confirmText={
          deleteLoading
            ? "Deleting..."
            : "Delete"
        }

        cancelText="Cancel"

        danger
      />

    </div>
  );
}