
<template>
  <Icon :iconName="'play-list-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlayListAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play-list-add'
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
