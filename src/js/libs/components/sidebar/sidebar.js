export function initSidebar() {
  return {
    openSidebar(param) {
      if (this.$store.app.sidebarOpenedState === false) {
        this.$store.app.sidebarOpenedState = !this.$store.app
          .sidebarOpenedState;
      }
      this.$store.app.activeSidebar = param;
      this.$store.app.isPanelOpened = false
      console.log(this.$store.app.activeSidebar);
    },
  };
}

export function initSidebarLeft() {
  return {
    closeSidebar() {
      this.$store.app.sidebarOpenedState = false;
      this.$store.app.isSidebarOpenedMobile = false
    },

    openSidebarMenu(param) {
      if (this.$store.app.activeSidebarMenu === param) {
        this.$store.app.activeSidebarMenu = "";
      } else {
        switch (param) {
          case "dashboard-menu-1":
            this.$store.app.activeSidebarMenu = "dashboard-menu-1";
            break;
          case "dashboard-menu-2":
            this.$store.app.activeSidebarMenu = "dashboard-menu-2";
            break;
          case "dashboard-menu-3":
            this.$store.app.activeSidebarMenu = "dashboard-menu-3";
            break;
          case "dashboard-menu-4":
            this.$store.app.activeSidebarMenu = "dashboard-menu-4";
            break;
          case "dashboard-menu-5":
            this.$store.app.activeSidebarMenu = "dashboard-menu-5";
            break;
          case "documents-menu-1":
            this.$store.app.activeSidebarMenu = "documents-menu-1";
            break;
          case "documents-menu-2":
            this.$store.app.activeSidebarMenu = "documents-menu-2";
            break;
          case "documents-menu-3":
            this.$store.app.activeSidebarMenu = "documents-menu-3";
            break;
          case "business-menu-1":
            this.$store.app.activeSidebarMenu = "business-menu-1";
            break;
          case "business-menu-2":
            this.$store.app.activeSidebarMenu = "business-menu-2";
            break;
          case "business-menu-3":
            this.$store.app.activeSidebarMenu = "business-menu-3";
            break;
          case "misc-menu-1":
            this.$store.app.activeSidebarMenu = "misc-menu-1";
            break;
          case "misc-menu-2":
            this.$store.app.activeSidebarMenu = "misc-menu-2";
            break;
          case "misc-menu-3":
            this.$store.app.activeSidebarMenu = "misc-menu-3";
            break;

          default:
            console.log(`Sorry, something went wrong.`);
        }
      }
    },
  };
}


export function initCollapseSidebar() {
  return {
    openSidebar(param) {
      if (this.$store.app.sidebarOpenedState === false) {
        this.$store.app.sidebarOpenedState = !this.$store.app
          .sidebarOpenedState;
      }
      this.$store.app.activeSidebar = param;
      this.$store.app.isPanelOpened = false
      console.log(this.$store.app.activeSidebar);
    },
    collapseSidebarToggle() {
      this.$store.app.isSidebarCollapsed = !this.$store.app
          .isSidebarCollapsed;
      this.$store.app.activeSidebarMenu = '';
    },
    collapseSidebarOpen() {
      this.$store.app.isSidebarCollapsed = false;
    },
    openSidebarMenu(param) {
      if (this.$store.app.activeSidebarMenu === param) {
        this.$store.app.activeSidebarMenu = "";
      } else {
        switch (param) {
          case "dashboard-menu":
            this.$store.app.activeSidebarMenu = "dashboard-menu";
            break;
          case "datatables-menu":
            this.$store.app.activeSidebarMenu = "datatables-menu";
            break;
          case "charts-menu":
            this.$store.app.activeSidebarMenu = "charts-menu";
            break;
          case "auth-menu":
            this.$store.app.activeSidebarMenu = "auth-menu";
            break;
          case "accounting-menu":
            this.$store.app.activeSidebarMenu = "accounting-menu";
            break;
          case "social-menu":
            this.$store.app.activeSidebarMenu = "social-menu";
            break;
          case "forum-menu":
            this.$store.app.activeSidebarMenu = "forum-menu";
            break;
          case "support-menu":
            this.$store.app.activeSidebarMenu = "support-menu";
            break;
          case "projects-menu":
            this.$store.app.activeSidebarMenu = "projects-menu";
            break;
          case "crm-menu":
            this.$store.app.activeSidebarMenu = "crm-menu";
            break;
          case "contacts-menu":
            this.$store.app.activeSidebarMenu = "contacts-menu";
            break;
          case "messages-menu":
            this.$store.app.activeSidebarMenu = "messages-menu";
            break;
          case "forms-menu":
            this.$store.app.activeSidebarMenu = "forms-menu";
            break;
          case "empty-menu":
            this.$store.app.activeSidebarMenu = "empty-menu";
            break;
          case "others-menu":
            this.$store.app.activeSidebarMenu = "others-menu";
            break;

          default:
            console.log(`Sorry, something went wrong.`);
        }
      }
    },
  };
}