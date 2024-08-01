import { useState } from "react"
import { useSections } from "../../hooks/useSections/useSections"
import type { FC } from "react"
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import logo from "../../../assets/logo1_white.svg"
import styles from "./navbar.module.css"

export const Navbar: FC = () => {
  const sections = useSections()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  return (
    <>
      <AppBar className={styles.navbar} position="sticky">
        <Toolbar
          className={styles.toolbar}
          // sx={{
          //   justifyContent: {
          //     xs: "flex-start",
          //     sm: "flex-start",
          //     md: "space-around",
          //   },
          // }}
          disableGutters
        >
          <img width={100} height={100} className={styles.logo} src={logo} />
          <Box className={styles.linksContainer}>
            {sections.map((section, id) => (
              <Link
                className={styles.navElem}
                variant="subtitle1"
                color="inherit"
                href={section.url}
                key={id}
                sx={{ display: { sm: "none", md: "block" } }}
              >
                {section.title}
              </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            container={window.document.body}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            // PaperProps={{
            //   sx: {
            //     width: { sm: "25vw", xs: "50vw" },
            //   },
            // }}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { sm: "block", md: "none" },
            }}
          >
            <Box className={styles.drawerContainer}>
              {sections.map((section, id) => (
                <Link
                  className={styles.navElem}
                  color="inherit"
                  href={section.url}
                  key={id}
                  // sx={{
                  //   fontSize: {
                  //     sm: "2vw !important",
                  //     xs: "3.75vw !important",
                  //   },
                  // }}
                >
                  {section.title}
                </Link>
              ))}
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  )
}
