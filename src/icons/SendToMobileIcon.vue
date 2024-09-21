
<template>
  <Icon :iconName="'send-to-mobile'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SendToMobileIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'send-to-mobile'
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
