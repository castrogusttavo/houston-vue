
<template>
  <Icon :iconName="'message-translate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageTranslateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-translate'
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
