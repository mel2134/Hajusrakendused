<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="yes"/>
	<xsl:template match="/">
		<h1>
			<xsl:value-of select="name(*)" />
		</h1>
		<ul>
			<xsl:for-each select="*/*">
				<li>
					<xsl:value-of select="*" />
					 
					<xsl:value-of select="*[2]" />
				</li>
			</xsl:for-each>
		</ul>
	</xsl:template>
</xsl:stylesheet>