
<template>
  <Icon :iconName="'tie'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TieIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tie'
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
