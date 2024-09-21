
<template>
  <Icon :iconName="'badminton-shuttle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BadmintonShuttleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'badminton-shuttle'
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
