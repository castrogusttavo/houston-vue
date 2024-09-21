
<template>
  <Icon :iconName="'call-blocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallBlockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-blocked'
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
