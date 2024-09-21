
<template>
  <Icon :iconName="'submerge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SubmergeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'submerge'
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
