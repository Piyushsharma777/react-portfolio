const ContactInfo = (props) => {
  const { icon, text } = props;
  return (
    <p className="flex items-center font-bold md:text-[14px] sm:text-[16px] text-[12px] gap-4">
      {icon} {text}
    </p>
  );
};
export default ContactInfo;
