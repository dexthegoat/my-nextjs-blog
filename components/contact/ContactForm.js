import { useState, useEffect } from 'react';
import Notification from '../ui/notification';

import classes from './ContactForm.module.css';

const sendData = async ({ email, name, message }) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      email,
      name,
      message,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // pending, success, error

  useEffect(() => {
    if (['success', 'error'].includes(requestStatus)) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendData({ email, name, message });
      setRequestStatus('success');
      setEmail('');
      setName('');
      setMessage('');
    } catch (e) {
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Your message is sent',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: 'Your message sending went wrong',
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How Can i help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            row="5"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
