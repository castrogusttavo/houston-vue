
<template>
  <Icon :iconName="'blocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BlockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blocked'
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
