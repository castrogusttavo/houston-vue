
<template>
  <Icon :iconName="'teaching'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TeachingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'teaching'
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
