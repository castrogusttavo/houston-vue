
<template>
  <Icon :iconName="'nose'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NoseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'nose'
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
