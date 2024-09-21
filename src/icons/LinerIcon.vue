
<template>
  <Icon :iconName="'liner'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LinerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'liner'
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
