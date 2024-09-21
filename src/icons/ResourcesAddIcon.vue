
<template>
  <Icon :iconName="'resources-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ResourcesAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'resources-add'
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
