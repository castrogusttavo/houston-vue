
<template>
  <Icon :iconName="'yen-send'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YenSendIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yen-send'
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
