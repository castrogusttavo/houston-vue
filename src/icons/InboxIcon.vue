
<template>
  <Icon :iconName="'inbox'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InboxIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inbox'
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
