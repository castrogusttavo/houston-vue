
<template>
  <Icon :iconName="'google-sheet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoogleSheetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google-sheet'
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
