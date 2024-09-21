
<template>
  <Icon :iconName="'smile'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmileIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smile'
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
