
<template>
  <Icon :iconName="'whatsapp-business'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WhatsappBusinessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'whatsapp-business'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
