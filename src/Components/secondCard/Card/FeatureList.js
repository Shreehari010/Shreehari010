import React from "react";
//import { Card } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import BalanceIcon from '@mui/icons-material/BalanceTwoTone';
import BackupIcon from '@mui/icons-material/Backup';
import BluetoothDriveIcon from '@mui/icons-material/BluetoothDrive';
import BluetoothConnectedIcon from '@mui/icons-material/BluetoothConnected';
import CableIcon from '@mui/icons-material/Cable';
import CastleIcon from '@mui/icons-material/Castle';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import Card from "../../../Theme/Component/container";
import { AnimationWrapper } from "react-hover-animation";

function FeatureList() {
  return (
    <>
      <div
        className="row"
        style={{
          alignItems: "center",
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <Card
          className="col-md-3 ml-5 mt-5 mr-5 card shadow elevation:0"
          style={{ alignItems: "center" }}
        >
          <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
            <CardContent>
              <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
                <CleanHandsIcon style={{color:"#45A1EA"}}/>
              </Typography>
              <Typography variant="p" component="p">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </CardContent>
          </AnimationWrapper>
        </Card>

             
        <Card className="col-md-3 ml-5 mr-5 mt-5 card  shadow ">
        <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
              <CastleIcon  style={{color:"#45A1EA"}}/>
            </Typography>
            <Typography variant="h5" component="h2">
              Be Safe Be Clean
            </Typography>
            <Typography
              style={{
                marginBottom: 12,
              }}
              color="textSecondary"
            >
              Keep Motivated
            </Typography>
            <Typography variant="body2" component="p">
              Stay Happy
            </Typography>
          </CardContent>
          </AnimationWrapper>
        </Card>

        <Card className="col-md-3 ml-5 mr-5 mt-5 card shadow">
        <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
              <CableIcon  style={{color:"#45A1EA"}}/>
            </Typography>
            <Typography variant="p" component="p">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Typography>
          </CardContent>
          </AnimationWrapper>
        </Card>

        <Card className="col-md-3 ml-5 mr-5 mt-5 card shadow">
        <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
              <BluetoothConnectedIcon  style={{color:"#45A1EA"}}/>
            </Typography>
            <Typography variant="p" component="p">
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </Typography>
          </CardContent>
          </AnimationWrapper>
        </Card>

        <Card className="col-md-3 ml-5 mr-5 mt-5 card   shadow">
        <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
              <BluetoothDriveIcon  style={{color:"#45A1EA"}}/>
            </Typography>
            <Typography variant="p" component="p">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </Typography>
          </CardContent>
          </AnimationWrapper>
        </Card>

        <Card className="col-md-3 ml-5 mr-5 mt-5 card shadow">
        <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
              <BackupIcon  style={{color:"#45A1EA"}}/>
            </Typography>
            <Typography variant="h5" component="h2">
            Many desktop publishing packages and as their man
            </Typography>
            <Typography
              style={{
                marginBottom: 12,
              }}
              color="textSecondary"
            >
              web page editors now use Lorem Ipsum
            </Typography>
            <Typography variant="body2" component="p">
              Stay Happy
            </Typography>
          </CardContent>
          </AnimationWrapper>
        </Card>
        <Card className="col-md-3 ml-5 mt-5 mr-5 card shadow">
        <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
              <BalanceIcon  style={{color:"#45A1EA"}}/>
            </Typography>
            <Typography variant="p" component="p">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            </Typography>
          </CardContent>
          </AnimationWrapper>
        </Card>

        <Card className="col-md-3 ml-5 mt-5 mr-5 card shadow">
        <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
              <CleanHandsIcon  style={{color:"#45A1EA"}}/>
            </Typography>
            <Typography variant="p" component="p">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </Typography>
          </CardContent>
          </AnimationWrapper>
        </Card>

        <Card className="col-md-3 ml-5 mt-5  mr-5 card shadow">
        <AnimationWrapper
            style={{
              color: {
                initial: "black",
                onHover: "red",
              },
            }}
          >
          <CardContent>
            <Typography style={{ textAlign: "center", marginBottom: "20px" }}>
              <CastleIcon  style={{color:"#45A1EA"}}/>
            </Typography>
            <Typography variant="p" component="p">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 
            </Typography>
          </CardContent>
          </AnimationWrapper>
        </Card>
      </div>
    </>
  );
}
export default FeatureList;
