
<template>
  <Icon :iconName="'right-to-left-list-number'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RightToLeftListNumberIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'right-to-left-list-number'
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
