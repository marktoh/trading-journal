import { UserAvatar } from "@/modules/core/components/user-avatar";
import { Field } from "./field";
import "./index.css";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <section className="avatar-section">
        <UserAvatar />
      </section>
      <section className="info-section">
        <Field label="Display Name" value="Mark Toh" />
        <Field label="Email" value="marktohtk@gmail.com" />
        <Field label="Date Registered" value="Apr 21, 2024" />
      </section>
    </div>
  );
};

export { SettingsPage };
