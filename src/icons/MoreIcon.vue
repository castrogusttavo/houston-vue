
<template>
  <Icon :iconName="'more'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more'
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
