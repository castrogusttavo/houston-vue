
<template>
  <Icon :iconName="'heart-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeartAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heart-add'
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
