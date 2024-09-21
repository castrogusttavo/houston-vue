
<template>
  <Icon :iconName="'repository'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RepositoryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'repository'
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
