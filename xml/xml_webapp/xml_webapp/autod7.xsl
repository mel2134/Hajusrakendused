<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output encoding="UTF-8" method="html" indent="yes"/>
    <xsl:template match="/">
		<table border="1">
			<tr>
				<th>Registri number</th>
				<th>Perekonnanimi</th>
			</tr>
			<xsl:for-each select="autod/auto">
				<tr>
					<xsl:if test="position() mod 2 = 0">
						<xsl:attribute name="style">background-color:lightgray</xsl:attribute>
					</xsl:if>
					<xsl:if test="position() mod 3 = 0">
						<xsl:attribute name="style">background-color:yellow</xsl:attribute>
					</xsl:if>
					<td>
						<xsl:value-of select="registrinumber"/>
					</td>
					<td>
						<xsl:value-of select="omanik"/>
					</td>
				</tr>
			</xsl:for-each>
		</table>
	</xsl:template>
</xsl:stylesheet>