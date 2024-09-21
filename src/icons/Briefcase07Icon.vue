
<template>
  <Icon :iconName="'briefcase-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Briefcase07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'briefcase-07'
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
