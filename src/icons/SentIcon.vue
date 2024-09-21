
<template>
  <Icon :iconName="'sent'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sent'
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
