
<template>
  <Icon :iconName="'more-vertical-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreVerticalCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-vertical-circle-01'
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
