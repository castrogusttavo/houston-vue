
<template>
  <Icon :iconName="'work-history'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkHistoryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'work-history'
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
