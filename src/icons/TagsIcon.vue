
<template>
  <Icon :iconName="'tags'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TagsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tags'
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
