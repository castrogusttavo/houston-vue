
<template>
  <Icon :iconName="'upwork'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UpworkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'upwork'
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
