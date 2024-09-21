
<template>
  <Icon :iconName="'user-full-view'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserFullViewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-full-view'
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
