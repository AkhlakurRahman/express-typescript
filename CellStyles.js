import React from "react";
import styled, { withTheme } from "styled-components";
import moment from "moment";
import CalendarSettingPopover from "../Views/Month/Calendar.Setting.Popover";
import HtmlParser from "Components/Utilities/HtmlParser";
const Title = styled.span`
  width: ${props => (props.hasBadge ? "65%" : "90%")};
`;

const DayEventNoTheme = ({
  event,
  popupId,
  showPopUp,
  theme,
  hidePopUp,
  handleMenuClick,
  handleBadgeClick,
  toggleEventClick,
  isPopUp,
  isParent
}) => {
  return (
    <StyledDayEvent onClick={() => toggleEventClick(event)}>
      {event.color ? (
        <i
          style={{ marginRight: "9px" }}
          className={"icon-circle " + event.color.toLowerCase()}
        />
      ) : (
        ""
      )}
      <Title
        hasBadge={
          (isParent && event.gradeBadge) ||
          (event.lateBadge &&
            moment(event.endDate).isBefore(moment.now(), "day"))
        }
      >
        <HtmlParser
          string={
            event.title ? event.title.split("<br>").join(" ") : event.title
          }
        />
      </Title>
      {!event.isFullDayEvent && event.eventType === "PERSONAL" && (
        <span style={{ textAlign: "right" }}>
          {moment(event.startDate).format("hh:mm a")} -{" "}
          {moment(event.endDate).format("hh:mm a")}{" "}
        </span>
      )}
      {event.gradeBadge && isParent && (
        <CalendarSettingPopover
          event={event}
          popupId={popupId}
          showPopUp={showPopUp}
          theme={theme}
          hidePopUp={hidePopUp}
          handleMenuClick={handleMenuClick}
          handleBadgeClick={handleBadgeClick}
          isPopUp={isPopUp}
        />
      )}
      {event.lateBadge &&
        moment(event.endDate).isBefore(moment.now(), "day") && (
          <CalendarSettingPopover
            event={event}
            popupId={popupId}
            showPopUp={showPopUp}
            theme={theme}
            hidePopUp={hidePopUp}
            handleMenuClick={handleMenuClick}
            handleBadgeClick={handleBadgeClick}
            isPopUp={isPopUp}
          />
        )}
    </StyledDayEvent>
  );
};
export const DayEvent = withTheme(DayEventNoTheme);

export const StyledDayEvent = styled.div`
  display: flex;
  height: 100%;
  color: ${props => props.theme.text};
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin-left: 15px;
  padding: 7px 0;
  align-items: center;

  .icon-circle {
    margin-right: 9px;
    line-height: 1;
    padding-top: 2px;
  }

  .agenda-badge {
    position: static !important;
  }
`;

export const AgendaHeader = props => {
  let day = moment(props.date);

  return (
    <div style={{ margin: "13px" }}>
      <SmallDayStyled>{day.format("ddd")}</SmallDayStyled>
      <BigNumStyled>{day.format("D")}</BigNumStyled>
    </div>
  );
};

export const WeekHeader = props => {
  let day = moment(props.date);

  return (
    <Wrapper>
      <SmallDayStyled>{day.format("ddd")}</SmallDayStyled>
      <BigNumStyled>{day.format("D")}</BigNumStyled>
    </Wrapper>
  );
};

export const DayHeader = props => {
  let day = moment(props.date);
  return props.view === "day" ? (
    <div
      style={{
        padding: "13px",
        borderBottom: `1px solid ${props => props.theme.borderColorTwo}`
      }}
    >
      <SmallDayStyled>{day.format("ddd")}</SmallDayStyled>
      <BigNumStyled>{day.format("D")}</BigNumStyled>
    </div>
  ) : (
    <div />
  );
};

const Wrapper = styled.div`
  text-align: left;
  margin-left: 10px;
`;

const SmallDayStyled = styled.div`
  color: ${props => props.theme.textLight};
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;
const BigNumStyled = styled.div`
  color: ${props => props.theme.textLight};
  font-family: "Nunito", sans-serif;
  font-size: 39px;
  font-weight: 600;
  line-height: 53px;
`;
const AgendaEventNoTheme = (
  {
    event,
    popupId,
    showPopUp,
    theme,
    hidePopUp,
    handleMenuClick,
    handleBadgeClick,
    isPopUp,
    isParent
  },
  i
) => (
  <StyledAgendaEvent>
    {event.color ? (
      <i className={"icon-circle " + event.color.toLowerCase()} />
    ) : (
      ""
    )}
    <span
      dangerouslySetInnerHTML={{
        __html: event.title ? event.title.split("<br>").join(" ") : event.title
      }}
    />
    {!event.isFullDayEvent && event.eventType === "PERSONAL" && (
      <span style={{ textAlign: "right" }}>
        {moment(event.startDate).format("hh:mm a")} -{" "}
        {moment(event.endDate).format("hh:mm a")}{" "}
      </span>
    )}
    {event.gradeBadge && isParent && (
      <CalendarSettingPopover
        event={event}
        popupId={popupId}
        showPopUp={showPopUp}
        theme={theme}
        hidePopUp={hidePopUp}
        handleMenuClick={handleMenuClick}
        handleBadgeClick={handleBadgeClick}
        isPopUp={isPopUp}
      />
    )}
    {event.lateBadge && moment(event.endDate).isBefore(moment.now(), "day") && (
      <CalendarSettingPopover
        event={event}
        popupId={popupId}
        showPopUp={showPopUp}
        theme={theme}
        hidePopUp={hidePopUp}
        handleMenuClick={handleMenuClick}
        handleBadgeClick={handleBadgeClick}
        isPopUp={isPopUp}
      />
    )}
  </StyledAgendaEvent>
);
export const AgendaEvent = withTheme(AgendaEventNoTheme);

const StyledAgendaEvent = styled.div`
  /* height: 12px;	 */
  color: ${props => props.theme.text};
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  margin-left: 13px;
  display: flex;
  align-items: center;
  span {
    margin: 5px;
    font-size: 14px;
  }

  i {
    display: flex;
    text-align: center;
    font-size: 7px;
  }

  .agenda-badge {
    position: static !important;
  }
`;

const WeekEventNoTheme = (
  {
    event,
    popupId,
    showPopUp,
    theme,
    hidePopUp,
    handleMenuClick,
    handleBadgeClick,
    toggleEventClick,
    isPopUp,
    isParent
  },
  i
) => (
  <StyledWeek
    onClick={() => toggleEventClick(event)}
    hasBadge={
      (isParent && event.gradeBadge) ||
      (event.lateBadge && moment(event.endDate).isBefore(moment.now(), "day"))
    }
  >
    {event.color ? (
      <i className={"icon-circle " + event.color.toLowerCase()} />
    ) : (
      ""
    )}
    <span className="title">
      <HtmlParser
        string={event.title ? event.title.split("<br>").join(" ") : event.title}
      />
    </span>
    {!event.isFullDayEvent && event.eventType === "PERSONAL" && (
      <span style={{ lineHeight: 1 }}>
        {moment(event.startDate).format("hh:mm a")} -{" "}
        {moment(event.endDate).format("hh:mm a")}{" "}
      </span>
    )}
    {event.gradeBadge && isParent && (
      <CalendarSettingPopover
        event={event}
        popupId={popupId}
        showPopUp={showPopUp}
        theme={theme}
        hidePopUp={hidePopUp}
        handleMenuClick={handleMenuClick}
        handleBadgeClick={handleBadgeClick}
        isPopUp={isPopUp}
      />
    )}
    {event.lateBadge && moment(event.endDate).isBefore(moment.now(), "day") && (
      <CalendarSettingPopover
        event={event}
        popupId={popupId}
        showPopUp={showPopUp}
        theme={theme}
        hidePopUp={hidePopUp}
        handleMenuClick={handleMenuClick}
        handleBadgeClick={handleBadgeClick}
        isPopUp={isPopUp}
      />
    )}
  </StyledWeek>
);
export const WeekEvent = withTheme(WeekEventNoTheme);

const StyledWeek = styled.div`
  height: 16px;
  color: ${props => props.theme.text};
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  line-height: 16px;
  i {
    font-size: 6px;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: ${props => (props.hasBadge ? "65%" : "70%")};
    line-height: 8px;
  }
  .title {
    line-height: 1;
  }
`;
