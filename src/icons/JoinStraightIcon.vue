
<template>
  <Icon :iconName="'join-straight'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JoinStraightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'join-straight'
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
