
<template>
  <Icon :iconName="'vomiting'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VomitingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vomiting'
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
