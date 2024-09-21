
<template>
  <Icon :iconName="'pound-receive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoundReceiveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pound-receive'
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
