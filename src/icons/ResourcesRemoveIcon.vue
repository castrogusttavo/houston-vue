
<template>
  <Icon :iconName="'resources-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ResourcesRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'resources-remove'
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
