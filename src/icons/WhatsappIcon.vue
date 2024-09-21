
<template>
  <Icon :iconName="'whatsapp'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WhatsappIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'whatsapp'
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
