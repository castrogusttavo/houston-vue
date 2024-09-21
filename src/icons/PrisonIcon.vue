
<template>
  <Icon :iconName="'prison'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrisonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'prison'
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
