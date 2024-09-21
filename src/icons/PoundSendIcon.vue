
<template>
  <Icon :iconName="'pound-send'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoundSendIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pound-send'
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
