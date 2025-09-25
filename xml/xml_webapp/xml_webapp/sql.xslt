<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="yes"/>
	<xsl:template match="/">
		<h1>
			sql
		</h1>
		<div>
			<xsl:for-each select="*/*">
				INSERT INTO <xsl:value-of select="name(../../*)" /> (
				<xsl:for-each select="*">
					<xsl:choose>
						<xsl:when test="position() = last()">
							<xsl:value-of select="name(.)" />
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="concat(name(.),',')" />
						</xsl:otherwise>
					</xsl:choose>
				</xsl:for-each>
				)
				VALUES (
				<xsl:for-each select="./*">
					<xsl:choose>
						<xsl:when test="position() = last()">
							<xsl:value-of select="." />
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="concat(.,',')" />
						</xsl:otherwise>
					</xsl:choose>
				</xsl:for-each>
				);
				<br></br>
			</xsl:for-each>
		</div>
	</xsl:template>
</xsl:stylesheet>