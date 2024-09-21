
<template>
  <Icon :iconName="'join-round'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JoinRoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'join-round'
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
