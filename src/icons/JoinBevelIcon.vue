
<template>
  <Icon :iconName="'join-bevel'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JoinBevelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'join-bevel'
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
