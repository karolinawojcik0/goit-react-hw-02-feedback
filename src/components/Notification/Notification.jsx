import React from 'react';
import { NotificationMessage } from './Notification.css';

export const Notification = ({ message }) => {
  return (
    <>
      <NotificationMessage>
        <p>{message}</p>
      </NotificationMessage>
    </>
  );
};
