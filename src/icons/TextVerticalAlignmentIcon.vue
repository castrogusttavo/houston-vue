
<template>
  <Icon :iconName="'text-vertical-alignment'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextVerticalAlignmentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-vertical-alignment'
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
