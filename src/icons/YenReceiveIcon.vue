
<template>
  <Icon :iconName="'yen-receive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YenReceiveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yen-receive'
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
