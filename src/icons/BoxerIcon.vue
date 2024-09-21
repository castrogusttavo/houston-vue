
<template>
  <Icon :iconName="'boxer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BoxerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'boxer'
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
