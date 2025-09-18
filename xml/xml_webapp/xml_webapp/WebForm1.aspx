<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="xml_webapp.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Xml ID="xml1" runat="server" DocumentSource="~/inimesed.xml" TransformSource="~/inimesed.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml2" runat="server" DocumentSource="~/inimesed.xml" TransformSource="~/inimesed1.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml3" runat="server" DocumentSource="~/inimesed.xml" TransformSource="~/inimesed2.xsl"></asp:Xml>
        </div>
        <div>
            <asp:Xml ID="xml4" runat="server" DocumentSource="~/inimesed.xml" TransformSource="~/inimesed3.xsl"></asp:Xml>
        </div>
    </form>
</body>
</html>
